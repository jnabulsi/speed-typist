import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'

vi.mock('vue-router', () => ({
  useRouter: vi.fn(),
}))

describe('Play.vue', () => {
  it('selects a random passage on mount', () => {
    useRouter.mockReturnValue({ push: vi.fn() })
    const wrapper = mount(Play)

    const passage = wrapper.vm.passage
    expect(wrapper.vm.passageList).toContain(passage)
  })
  it('decrements timeLeft every second', async () => {
    vi.useFakeTimers()
    useRouter.mockReturnValue({ push: vi.fn() })

    const wrapper = mount(Play)
    const initial = wrapper.vm.timeLeft

    vi.advanceTimersByTime(3000)
    expect(wrapper.vm.timeLeft).toBeLessThan(initial)

    vi.useRealTimers()

  })
  it('navigates to Results when passage is fully typed', async () => {
    const push = vi.fn()
    useRouter.mockReturnValue({ push })

    const wrapper = mount(Play)

    wrapper.vm.passage = 'abc'
    wrapper.vm.typed = 'abc'

    await wrapper.vm.checkInput()

    expect(push).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Results',
        query: expect.objectContaining({
          wpm: expect.any(Number),
          accuracy: expect.any(Number),
          totalChars: 3,
        }),
      })
    )
  })

})

describe('Home.vue', () => {
  it('navigates to Play when Start Typing button is clicked', async () => {
    const push = vi.fn()
    useRouter.mockReturnValue({ push })

    const wrapper = mount(Home)

    await wrapper.find('button').trigger('click')

    expect(push).toHaveBeenCalledWith({ name: 'Play' })
  })
})


