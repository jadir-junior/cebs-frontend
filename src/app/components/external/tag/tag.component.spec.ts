import { ComponentFixture, TestBed } from '@angular/core/testing'
import { render, screen } from '@testing-library/angular'

import { TagComponent } from './tag.component'

describe('TagComponent', () => {
  const { getByText } = screen
  it('should create a tag with content', async () => {
    await render(`<cebs-tag>Pro</cebs-tag>`, {
      declarations: [TagComponent],
    })

    expect(getByText(/pro/i)).toBeInTheDocument()
  })
})
