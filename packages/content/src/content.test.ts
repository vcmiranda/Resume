import { describe, expect, it } from 'vitest'
import { allProjects, featuredProjects, getProject, projects } from './projects'
import { caseStudies, getCaseStudy } from './case-studies'
import { home } from './home'
import { site } from './site'

describe('projects', () => {
  it('has a unique slug per project', () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length)
  })

  it('orders featured projects by their explicit order field', () => {
    const orders = featuredProjects.map((p) => p.order)
    expect(orders).toEqual([...orders].sort((a, b) => a - b))
  })

  it('resolves a project by slug and returns undefined for an unknown one', () => {
    expect(getProject('nami')?.title).toContain('Nami')
    expect(getProject('does-not-exist')).toBeUndefined()
  })

  it('gives every project the SEO fields the route builder needs', () => {
    for (const p of allProjects) {
      expect(p.seo.title, p.slug).toBeTruthy()
      expect(p.seo.description, p.slug).toBeTruthy()
      expect(p.summary.length, p.slug).toBeGreaterThan(40)
    }
  })
})

describe('case studies', () => {
  it('has a matching project for every case study', () => {
    for (const study of caseStudies) {
      expect(getProject(study.slug), study.slug).toBeDefined()
    }
  })

  it('follows the same narrative section order in every study', () => {
    for (const study of caseStudies) {
      expect(study.sections.map((s) => s.id)).toEqual([
        'context',
        'problem',
        'role',
        'constraints',
        'approach',
        'outcome',
        'lessons',
      ])
    }
  })

  it('marks employer work as confidential so the disclosure note renders', () => {
    expect(getProject('event-management-platform')?.confidential).toBe(true)
    expect(getProject('state-per-microfrontend')?.confidential).toBe(true)
  })

  it('resolves by slug', () => {
    expect(getCaseStudy('nami')).toBeDefined()
    expect(getCaseStudy('nope')).toBeUndefined()
  })
})

describe('site content', () => {
  it('avoids the phrases banned from this rewrite', () => {
    const banned = [
      'passionate',
      'results-driven',
      'cutting-edge',
      'building the future',
      'pixel-perfect',
      'awesome',
    ]
    const corpus = JSON.stringify({ site, home }).toLowerCase()
    for (const phrase of banned) {
      expect(corpus, phrase).not.toContain(phrase)
    }
  })

  it('points at the résumé asset that actually ships', () => {
    expect(site.resumePath.endsWith('.pdf')).toBe(true)
  })
})
