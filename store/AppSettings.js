import { createEffect, createEvent, createStore } from "effector";

export const getAppSettingsFx = createEffect(async () => {
	const response = await fetch('/api/settings')
	const data     = await response.json()
	return data
})

export const $appSettings = createStore({})
	.on (getAppSettingsFx.done, (_, data) => data.result)

$appSettings.watch(data => {
	console.log(data)
})
