import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

async function createPost() {
	const { data, error } = await supabase
		.from("learning_table") // Имя твоей таблицы
		.insert([
			{
				name: "babun",
			},
		])
		.select(); // .select() возвращает созданную строку (включая id и created_at)

	if (error) {
		console.error("Ошибка при вставке:", error.message);
		return;
	}

	console.log("Успешно добавлено:", data);
}
createPost();

async function getAllRows() {
	const { data, error } = await supabase.from("learning_table").select("*"); // '*' означает выбрать все колонки

	if (error) {
		console.error("Ошибка при получении данных:", error.message);
		return;
	}

	console.log("Все записи:", data[3]);
}

getAllRows();
