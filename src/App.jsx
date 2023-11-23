import { useState } from 'react'
import './App.css'

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);


  const handleOptionClick = () => {
   
    alert(`Cadastrar ${selectedOption} - Input 1: ${input1} - Input 2: ${input2} - Input 3: ${input3} Input 4: ${input4}  Input : ${input5}`);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDayToggle = (day) => {
  if (selectedDays.includes(day)) {
    // Se o dia estiver selecionado, remover
    setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
  } else {
    // Se o dia não estiver selecionado, adicionar
    setSelectedDays([...selectedDays, day]);
  }
};


  return (
    <div >
      
      <div>
        <h1 className='h1'>CADASTROS</h1>
          <img className='img' src="data:image/png;base64,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" alt="" />
      <hr className='linha' />
      <hr className='linhaVertical'/>

    </div>
      
      
     
    <select value={selectedOption} onChange={handleSelectChange}>
        <option value=""></option>
        <option value="Turmas">Turmas</option>
        <option value="Salas">Salas</option>
        <option value="Disciplinas">Disciplina</option>
        <option value="Professores">Professores</option>
        <option value="Cursos">Cursos</option>
        <option value="Agenda">Agenda</option>
      </select>

      {selectedOption === 'Turmas' && (
        <div className='input1'>
          <label>Nome da Turma:</label>
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <label>Id do curso:</label>
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>
      )}

      {selectedOption === 'Professores' && (
        <div className='input1'>
          <label>Nome do Professor:</label>
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <label>CPF:</label>
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
          <label>Disciplina do Professor:</label>
          <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)} />
          <div className='diaD'>
            <label>Dias da semana disponíveis:</label>
            <div className='inputDias'>
              <label>
                <input
                  type="checkbox"
                  value="Segunda-feira"
                  checked={selectedDays.includes("Segunda-feira")}
                  onChange={() => handleDayToggle("Segunda-feira")}
                />
                Segunda-feira
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Terça-feira"
                  checked={selectedDays.includes("Terça-feira")}
                  onChange={() => handleDayToggle("Terça-feira")}
                />
                Terça-feira
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Quarta-feira"
                  checked={selectedDays.includes("Quarta-feira")}
                  onChange={() => handleDayToggle("Quarta-feira")}
                />
                Quarta-feira
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Quinta-feira"
                  checked={selectedDays.includes("Quinta-feira")}
                  onChange={() => handleDayToggle("Quinta-feira")}
                />
                Quinta-feira
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Sexta-feira"
                  checked={selectedDays.includes("Sexta-feira")}
                  onChange={() => handleDayToggle("Sexta-feira")}
                />
                Sexta-feira
              </label>
            </div>
          </div>
        </div>
      )}

      {selectedOption === 'Disciplinas' && (
        <div className='input1'>
          <label>CPF do professor que vai lecionar a Disciplina:</label>
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <label>Nome da Disciplina:</label>
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>
      )}

      {selectedOption === 'Cursos' && (
        <div className='input1'>
          <label>Nome do Curso:</label>
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <label>Codigo do curso:</label>
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>
      )}

      {selectedOption === 'Agenda' && (
        <div className='input1'>
          <label>ID do curso:</label>
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <label>ID da turma:</label>
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
          <label>CPF do professor:</label>
          <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)} />
          <label>ID da sala:</label>
          <input type="text" value={input4} onChange={(e) => setInput4(e.target.value)} />
          <label>data do agendamento</label>
          <input type="text" value={input5} onChange={(e) => setInput5(e.target.value)} />
        </div>
      )}

      {selectedOption === 'Salas' && (
        <div className='input1'>
          <label>Nome da Sala:</label>
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <label>Código da sala:</label>
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>
      )}

      {selectedOption && (
        <div>
          <button className='botao' onClick={handleOptionClick}>Cadastrar</button>
        </div>
      )}

      <button className='botao2' onClick={handleOptionClick}>Voltar</button>
    </div>
  );
}

export default App;
