window.onload = () => {
    const myLiffId = '1656488947-l1qRdZM5';
    const divPage = document.getElementById('liff-page');
    
    //p要素の取得
    const pElement = document.getElementById('liff-message');
    
    //LIFFで立ち上げているかどうかの判定
    if(liff.isInClient()){
      pElement.innerHTML='これはLIFF画面です'

      liff.init({
          liffId: myLiffId
      })
      .then(() => {
            //idトークンによる年齢情報の取得
        const idToken = liff.getIDToken();
        const jsonData = JSON.stringify({
        id_token: idToken
        });
        
        fetch('/api',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: jsonData,
        creadentials: 'same-origin'
        })
        .then(res=>{
        //ここにレスポンス返ってくる
        })
        .catch(e=>console.log(e));
          
        liff.getProfile()
        .then(profile=>{
            const name = profile.displayName;
            const lineId = profile.userId;
            const pElement2 = document.createElement('p');
            pElement2.innerHTML = `あなたの名前は${name}です。LINE IDは${lineId}です。`;
            divPage.appendChild(pElement2);
        })
      })

    }else{
      pElement.innerHTML='これはLIFF画面じゃありません'
    }
    
   }