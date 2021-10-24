//1.auth user
//2.get user

const getUser = ()=>{
    return new Promise((resolve,reject)=>{
        /*setTimeout(()=>{
            resolve({user: 'anuradha'})
        },1000)*/
        setTimeout(()=>{
            reject({error:'user error'})
        },1000)
    })
}

const chkauth = ()=>{
    return new Promise((resolve,reject)=>{
        /*setTimeout(()=>{
            resolve({auth:true})
        },1000)*/
        setTimeout(()=>{
            reject({error:'auth error'})
        },1000)
    })
}

/*getUser().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)

})*/

chkauth().then(()=>{
     return getUser()
})
.then((data)=>{
     console.log(data)
})
.catch((error)=>{
      console.log(error)
})