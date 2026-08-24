import { db } from 'hatchable';
export const access='public';
export const methods=['GET'];
export default async function(req,res){const {rows}=await db.query('SELECT id,name,slug,description,icon,starting_price,rating,review_count,featured FROM services ORDER BY featured DESC, name');res.json({services:rows});}