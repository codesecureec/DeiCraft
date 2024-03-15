import { db, users } from 'astro:db';

// https://astro.build/db/seed
export default async function () {
	await db.insert(users).values([
		{ 
			id: "1", 
			name: "deics", 
			email: "ajimenez@copmuterserviceec.com",
			password: "password",
		},
		{ 
			id: "2", 
			name: "maics", 
			email: "msegura@copmuterserviceec.com",
			password: "password1",
		},
	]);
}
