export const users = [
	{
		userId: Math.random(),
		name: "Tiko",
		boards: [
			{
				boardId: Math.random(),
				boardName: "Js",
				tasks: {
					todo: [{ taskId: Math.random(), taskName: "learn JS" },{ taskId: Math.random(), taskName: "learn JS" },{ taskId: Math.random(), taskName: "learn JS" }],
					doing: [{ taskId: Math.random(), taskName: "learn REACT" }],
					done: [{ taskId: Math.random(), taskName: "learn REDUX" }],
				},
			},
		],
	},
];
