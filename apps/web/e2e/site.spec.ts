import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const ROUTES = ['/', '/work', '/work/event-management-platform', '/work/nami', '/about', '/resume']

test.describe('accessibility', () => {
  for (const route of ROUTES) {
    test(`${route} has no axe violations`, async ({ page }) => {
      await page.goto(route)
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()
      expect(results.violations).toEqual([])
    })
  }
})

test('primary CTA reaches the work section', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'View my work' }).click()
  await expect(page).toHaveURL(/#work$/)
  await expect(page.getByRole('heading', { name: 'Selected work' })).toBeVisible()
})

test('a project card opens its case study', async ({ page }) => {
  await page.goto('/work')
  await page.getByRole('link', { name: /Building a platform frontend from scratch/ }).first().click()
  await expect(page).toHaveURL(/\/work\/event-management-platform$/)
  await expect(page.getByRole('heading', { name: 'Context', exact: true })).toBeVisible()
})

test('the résumé PDF is downloadable', async ({ page }) => {
  await page.goto('/resume')
  const link = page.getByRole('link', { name: /download pdf/i })
  await expect(link).toHaveAttribute('href', /\.pdf$/)
  const res = await page.request.get((await link.getAttribute('href'))!)
  expect(res.status()).toBe(200)
  expect(res.headers()['content-type']).toContain('pdf')
})

test('the theme toggle persists across a reload', async ({ page }) => {
  await page.goto('/')
  const before = await page.locator('html').getAttribute('data-theme')
  await page.getByRole('button', { name: /switch to (light|dark) theme/i }).click()
  const after = await page.locator('html').getAttribute('data-theme')
  expect(after).not.toBe(before)
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', after!)
})

test('every interactive element on the homepage is keyboard reachable with a visible focus ring', async ({
  page,
}) => {
  await page.goto('/')
  const interactive = await page.locator('a[href], button').count()
  const seen = new Set<string>()

  for (let i = 0; i < interactive + 5; i++) {
    await page.keyboard.press('Tab')
    const info = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null
      if (!el || el === document.body) return null
      const style = getComputedStyle(el)
      return {
        key: el.tagName + (el.textContent ?? '').slice(0, 24),
        outline: style.outlineStyle,
        width: style.outlineWidth,
      }
    })
    if (!info) continue
    seen.add(info.key)
    expect(info.outline, `focus ring missing on ${info.key}`).not.toBe('none')
  }

  expect(seen.size).toBeGreaterThan(5)
})

test('content is present without client-side JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByText(/ASICS Apps/).first()).toBeVisible()
  await expect(page.getByRole('link', { name: 'View my work' })).toBeVisible()
  await context.close()
})

test('the contact form validates before it posts', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: /send message/i }).click()
  await expect(page.getByText(/please tell me your name/i)).toBeVisible()
})
