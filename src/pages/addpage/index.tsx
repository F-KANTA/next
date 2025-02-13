import { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

export default function AddPage() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState<string[]>([]);
    const [answer, setAnswer] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [result, setResult] = useState('');

    const clickevent = async () => {
        const url = "http://localhost:3000/api/hello";
        const response = await axios.get(url);
        setQuestion(response.data.quetion.rows[0].name);
        setOptions(response.data.quetion.rows.map((option: { choice: string }) => option.choice));
        // const i = ;
        // const answer_p = response.data.quetion.rows{i}.is_answer;
        setAnswer(response.data.quetion.rows.is_answer);
        setUserAnswer('');
        setResult('');
    }
    const checkAnswer = () => {
        if (userAnswer === answer) {
            setResult('正解です！');
        } else {
            setResult('不正解です。');
        }
    };
    return (
        <div className="oya">
            <div className="kodomo">福田勘太クイズ</div>
            <Button variant="outlined" onClick={clickevent}>第1問</Button>
            <div className="question">{question}</div>
            <ul>
                {options.map((option)=>(
                    <li key={option} onClick={() => setUserAnswer(option)}>{option}</li>
                ))}
            </ul>
            <Button variant="outlined" onClick={checkAnswer}>OK?</Button>
            <p>{result}</p>
        </div>
    );
}