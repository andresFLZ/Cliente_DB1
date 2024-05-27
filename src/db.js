import pkg from "oracledb";

const {getConnection} = pkg;

import {
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";

const db = {
  user: DB_USER,
  password: DB_PASSWORD,
  connectString: `${DB_HOST}:${DB_PORT}/xe`
}

async function open(sql, binds, autoCommit){
  let con;
  try {
    con = await getConnection(db);
    console.log("Llega", sql, binds)
    const result = await con.execute(sql, binds, { autoCommit });
    console.log("Llega2", result)
    const transformedResult = transformResult(result);
    return transformedResult;
  } catch (error) {
    console.error('Error ejecutando la consulta: ', error);
  } finally {
    if (con) {
      try {
        await con.close();
      } catch (closeError) {
        console.error('Error cerrando la conexión: ', closeError);
      }
    }
  }
};

async function openPost(sql, binds, autoCommit){
  let con;
  try {
    con = await getConnection(db);
    console.log("Llega", sql, binds)
    const result = await con.execute(sql, binds, { autoCommit });
    console.log("Llega2", result)
    return result;
  } catch (error) {
    console.error('Error ejecutando la consulta: ', error);
  } finally {
    if (con) {
      try {
        await con.close();
      } catch (closeError) {
        console.error('Error cerrando la conexión: ', closeError);
      }
    }
  }
};

async function openPut(sql, binds, autoCommit){
  let con;
  try {
    con = await getConnection(db);
    console.log("Llega", sql, binds)
    const result = await con.execute(sql, binds, { autoCommit });
    console.log("Llega2", result)
    return result;
  } catch (error) {
    console.error('Error ejecutando la consulta: ', error);
  } finally {
    if (con) {
      try {
        await con.close();
      } catch (closeError) {
        console.error('Error cerrando la conexión: ', closeError);
      }
    }
  }
};

function transformResult(result) {
  const { metaData, rows } = result;
  return rows.map(row => {
    const obj = {};
    metaData.forEach((col, index) => {
      obj[col.name] = row[index];
    });
    return obj;
  });
}


export {open, openPost, openPut};