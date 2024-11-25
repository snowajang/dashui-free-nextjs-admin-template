import { redirect } from "next/navigation"
import { setCookieLK, getCoookieLK } from "../../cookie"
import fs from 'fs'

export async function GET(request) {
    return Response.json({ message: 'API PDAS'})
}

export async function POST(request) {    
    let status=0
    let message= '/authentication/sign-in?error='
    try { 
        let body = await request.formData()
        let access_token = body.get('access_token')
        let pid = body.get('pid')
        let uname = body.get('name')
        let json_data = {
            "loginType": 2,
            "officeID": 101,
            "personalID": Number(pid),
            "accessToken": access_token
        } 

        console.log(json_data)
        let res = await fetch('https://lk2proxy.bora.dopa.go.th/api/center/login/confirm', { method: 'POST', body: JSON.stringify(json_data) ,headers:{ 'Content-Type':'application/json'}})
        let d = await res.json();
        if (res.status >= 200 && res.status < 300) {
            if (d!=null) {
                let lkaccess = {
                    token: d.token,
                    pid: pid,
                    name: uname
                }
                setCookieLK("lktokenaccess",JSON.stringify(lkaccess))
                message= '/lk/pid/pophouse'
            } 
            status = 200
        } else {
            message= 'http status: ' + res.status + ' body : { ' + JSON.stringify(d) + '}';
            message= '/authentication/sign-in?error='+message
            status = 401
        }
    } catch (error) {
        console.log(error)    
        fs.writeFileSync('log.txt', error)
        message= 'fund error: 0x00 body : { ' + JSON.parse(error) + '}';
        message= '/authentication/sign-in?error='+message
        status=500
    }

    redirect(message)
}