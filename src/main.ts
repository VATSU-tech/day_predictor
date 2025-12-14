let load_contain = document.getElementById('chargement') as HTMLParagraphElement;
const load_words = ['sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds','sdfsfsdfsfds']

for( const w in load_words){
    load_contain.textContent += ` ${load_words[w]}`
}
