import React, {useState} from 'react'
import axios from 'axios'

import styles from '../styles/main.module.css'

const {main, container, form, text, form_input, btn, info, group} = styles

const Main = () => {
    

    const [link, setLink] = useState('')
    const [resData, setResData] = useState("")

    const {title, duration, status} = resData

    const load = async (options) =>{

        const res = await axios(options)
            console.log(res)
            const {data} = res
     
            data.title && setResData({
                title : data.title,
                duration: data.duration,
                status : data.status
            })

            data.status === "processing" ? load () : window.open(data.link, '_self')

    }

    const convert = async () =>{
        let params 
        
        if(link.includes('https://youtu.be/')){
            params = link.split(".be/")[1]
        }else if(link.includes('https://www.youtube.com/watch?v=')){
            params = link.split("watch?v=")[1]
        }else if(link.includes('https://www.youtube.com/playlist?list=')){
            const res = await axios(link)
            const html = await res.text()
            console.log(html)
           
           // thumbs = document.querySelectorAll('a#thumbnail.yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail')
           // thumbs[1].href.split('v=')[1].split("&list")[0]

        }else{
            window.alert('Invalid link!')
        }

        const options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: {id: params},
            headers: {
                'X-RapidAPI-Key': 'ce2a7759dfmsh3ef590ae73c51f6p120294jsna3675f280b24',
                'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
        }

        

           await load(options)
            
            
            
      
     
    }

  return (
    <main className={main}>
        <div className={container}>
          
                <form className={form}>

                    <h2 className={text}>Link you want to convert :</h2>
                    <input value={link} onChange={(e)=>setLink(e.target.value)} type="text" className={form_input} />

                </form>
                <button type="button" onClick={convert} className={btn}>Convert</button>
                
                { resData &&
                
                <div className={info}>

                    <div className={group}>
                        <h2 className={text}>Title :</h2>
                        <input disabled value={title} type="text" className={form_input} />
                    </div>
                    
                    <div className={group}>
                        <h2 className={text}>Duration :</h2>
                        <input disabled value={duration} type="text" className={form_input} />
                    </div>
                    
                
                    <div className={group}>
                        
                        <h2 className={text}>Status :</h2>
                        <input disabled value={status} type="text" className={form_input} />

                    </div>

                    

                </div>
                }

           
        </div>
    </main>
  )
}

export default Main