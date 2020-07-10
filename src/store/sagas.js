import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
export default function* rootSaga() {
  const sagas = []
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
