//1.auth user
//2.get user


const getUser = ( callback)=>{
    /*setTimeout(()=>{
        callback({name: 'anuradha'},undefined) 
    },1000)*/
    setTimeout(()=>{
        callback(undefined,{error:"user error"}) 
    },1000)
    
}

/*getUser((data,error)=>{
    if(data){
        console.log(data);
    }else{
        console.log(error);
    }
}) */

const chkauth = (abc)=>{
    setTimeout(()=>{
        abc({auth:true},undefined);
    },1000);
    /*setTimeout(()=>{
        abc(undefined,{error:'auth error'});
    },1000); */
}

chkauth((d,e)=>{
    if(d){
        console.log(d)
        getUser((data,error)=>{
            if(data){
                console.log(data);
            }else{
                console.log(error);
            }
        })
    }else{
        console.log(e)
    }
})