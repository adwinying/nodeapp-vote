import { PollOpt } from './pollopt';

export class Poll {
	title: string;
	_id: number;
	ownerId: number;
	updated: Date;
	count: number;
	opts: PollOpt[];
}