
export const convertToBinary = (text: string) => {
    return text.split('').map(char => {
      // Her bir karakterin ASCII kodunu alıp binary'ye çeviriyoruz
      return char.charCodeAt(0).toString(2).padStart(8, '0'); 
    }).join(' ');
  };
  
  
  