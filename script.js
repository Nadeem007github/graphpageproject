const addButton=document.querySelector('#add');
const updateLSdata=()=>{

    const textareadata=document.querySelectorAll('textarea');

    const notes=[];
    console.log(textareadata)
    textareadata.forEach((note)=>{
            return notes.push(note.value);

    })

    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));

}

const addNewNote=(text='')=>{

    const note=document.createElement('div');
    note.classList.add('note');
    
    const htmlData=` 

    <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    <div class="main ${text?"":"hidden"}"></div>
    <textarea class="${text?"hidden":""}"></textarea>`;


    note.insertAdjacentHTML('afterbegin',htmlData);
  
   // getting the reference 
   const editbutton=note.querySelector('.edit')
  const delbutton=note.querySelector('.delete')
   const mainDiv=note.querySelector('.main')
   const textarea=note.querySelector('textarea')
   
   delbutton.addEventListener('click',()=>{
    note.remove();
   })
    textarea.value=text;
    mainDiv.innerHTML=text;
    editbutton.addEventListener('click',()=>{
    mainDiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
   })


   textarea.addEventListener('change',(event)=>{
    const value=event.target.value;
    mainDiv.innerHTML=value;
    updateLSdata();


   })

    document.body.appendChild(note);

}
const notes=JSON.parse(localStorage.getItem('notes'))   ; 


if(notes){notes.forEach((note)=>addNewNote(note))};

addButton.addEventListener('click',()=>addNewNote() );