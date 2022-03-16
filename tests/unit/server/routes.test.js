import { jest, expect, describe, test, beforeEach } from '@jest/globals'
import config from '../../../server/config.js'
import { handler } from '../../../server/routes.js'
import TestUtil from '../_util/testUtil.js'

const {
  pages,
  location
} = config

describe('#Routes - test site for api response', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
    jest.clearAllMocks()
  })

  test('GET / - should redirect to home page', async () => {
    const params = TestUtil.defaultHandleParams()
    params.request.method = 'GET'
    params.request.url = '/'

    await handler(...params.values())

    expect(params.response.writeHead).toBeCalledWith(
      301,
      {
        'Location': location.home
      }
    )
    expect(params.response.end).toHaveBeenCalled()
  })
  test.todo(`GET /home - should response with ${pages.homeHTML} file stream`)
  test.todo(`GET /controller - should response with ${pages.controllerHTML} file stream`)
  test.todo(`GET /file.ext - should response with file stream`)
  test.todo(`GET /unknow - given an inexistent route it should response with 404`)

  describe('exceptions', () => {
    test.todo('given inexistent file it should respond with 404')
    test.todo('given an error it should respond with 500')
  })
})