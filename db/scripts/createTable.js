// function creates table with unique id

async function createResourceTable() {
  console.log("start");
  const res = await query(`CREATE TABLE IF NOT EXISTS resources (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(50),
        url VARCHAR(250),
        content_type VARCHAR(50),
        topic VARCHAR(50));`);
  console.log("finish");
}
createResourceTable();
