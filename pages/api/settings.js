import { getAppSettings } from '../../util/listOfVariables.js'

export default function handler(req, res) {
	let settings = getAppSettings()
	res.status(200).json(settings)
}
