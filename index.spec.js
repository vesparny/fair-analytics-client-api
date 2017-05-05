import fairAnalytics from './index'

const mockedLS = {
  getItem: jest.fn(() => ({uniqueSessionId: 'ok'})),
  setItem: jest.fn(() => {})
}
window.localStorage = mockedLS

test('should create a fa instance', () => {
  expect(fairAnalytics).toBeDefined()
  const fa = fairAnalytics({url: 'bla'})
  expect(fa.send).toBeDefined()
})
