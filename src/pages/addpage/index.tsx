import { useState } from 'react';
import { Button } from '@mui/material';

export default function AddPage() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState<string[]>([]);
    const [answer, setAnswer] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [result, setResult] = useState('');

    const clickevent = () => {
        const data = {
            question: '私の好きな食べ物は？',
                options: [
                    { text: 'りんご' },
                    { text: 'バナナ' },
                    { text: 'てりやきマックバーガー' },
                    { text: 'ぶどう' },
                ],
                correctAnswer: 'てりやきマックバーガー',
            }
        setQuestion(data.question);
        setOptions(data.options.map((option: { text: string }) => option.text));
        setAnswer(data.correctAnswer);
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