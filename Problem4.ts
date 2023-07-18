//Lottery

function lotere(num: number, callback: (message: string) => void) {
    const winningNumber = Math.floor(Math.random() * 1000) + 1;
  
    setTimeout(() => {
      if (num === winningNumber) {
        callback(`Selamat! Anda memenangkan lotere dengan nomor ${winningNumber}!`);
      } else {
        callback(`Maaf, Anda gagal memenangkan lotere. Nomor yang benar adalah ${winningNumber}.`);
      }
    }, 10000);
  }
  
  const userNumber = 500; // Angka yang dimasukkan oleh pengguna
  
  lotere(userNumber, (message) => {
    console.log(message);
  });
  