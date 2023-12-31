import db from "../services/db";
import { OkPacket, RowDataPacket } from "mysql2";
import { IVideoDataType, IVideoType } from "../interfaces/IVideoType";

export class videoModel{
    
    findByLimit = (tableSetting:IVideoDataType) => {
        console.log(tableSetting);
        const status = tableSetting.tableStatus
        const limit = tableSetting.pageLimit
        const page = tableSetting.page
        const search = tableSetting.search
        const orderBy = tableSetting.orderBy
        const sortBy = tableSetting.sortBy

        const statusStr = status=='Y'?status : status=='N'?status : 'Y'
        const limitStr = limit? limit : 10
        const pageStr = page? page: 0
        const searchStr = search!=''? ` and search like '%${search}%'`: ``
        const orderByStr = orderBy=='ascending'? 'ASC' : orderBy=='descending'? 'DESC': ``
        const sortByStr = sortBy=='Like'? 'likeCount': sortBy=='Views'? 'viewCount' :sortBy=='Rating'? 'ratingCount': `addDateTime`

        const sql = `SELECT * FROM  nj_videos WHERE status='${statusStr}' ${searchStr} ORDER BY ${sortByStr} ${orderByStr} LIMIT ${limitStr}  OFFSET ${limitStr*pageStr}`
        console.log(sql);
        return new Promise((resolve, reject)=>{
            db.query(sql, (err:any, result:any)=>{
                if(err) return reject(err)
                resolve(result)
            })
        })
    }
    findOne = (id:number) => {
        return new Promise((resolve, reject)=>{
          db.query(
            'SELECT * FROM nj_videos WHERE id = ?',
            [id],
            (err:any, res:unknown)=>{
              if(err) reject(err)
              resolve(res)
            }
          )
        })
    }
    updateOne = (channelDetails:IVideoDataType) => {
        const sql = `UPDATE nj_videos SET ? WHERE id = ?`
        //update not created in utils as not needed
    }
    findDataLength = (status:string) => {
        const statusStr = status=='Y'?status: status=='N'?status: 'Y'
        const sql = `SELECT COUNT(*) FROM nj_videos WHERE status='${statusStr}'`
        return new Promise((resolve, reject)=>{
          db.query(sql, (err:any, res:unknown)=>{
            if(err) reject(err)
            resolve(res)
          })
        })
    }
}