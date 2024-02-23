import { LoremIpsum } from 'lorem-ipsum'
import ScribbleProject from '@/assets/ScribbleProject.png'

const lorem = new LoremIpsum({});
export const projects = [
	{
		name: lorem.generateWords(1),
		img: ScribbleProject,
		pinned: true,
		skills: [{ name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }]
	},
	{
		name: lorem.generateWords(1),
		img: ScribbleProject,
		pinned: true,
		skills: [{ name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }]
	},
	{
		name: lorem.generateWords(1),
		img: ScribbleProject,
		pinned: true,
		skills: [{ name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }]
	},
	{
		name: lorem.generateWords(1),
		img: ScribbleProject,
		pinned: true,
		skills: [{ name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }]
	}, {
		name: lorem.generateWords(1),
		img: ScribbleProject,
		skills: [{ name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }]
	},
	{
		name: lorem.generateWords(1),
		img: ScribbleProject,
		skills: [{ name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }]
	},
	{
		name: lorem.generateWords(1),
		img: ScribbleProject,
		skills: [{ name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }, { name: lorem.generateWords(1) }]
	}
]