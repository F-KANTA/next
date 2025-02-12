import { useState } from 'react';
import { Button } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function addPage() {
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
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.black' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className="options">
                {options.map((option)=>(
                    <ListItemButton key={option} onClick={() => setUserAnswer(option)}>{option}</ListItemButton>
                ))}
            </List>
            <Button variant="outlined" onClick={checkAnswer}>OK?</Button>
            <p>{result}</p>
        </div>
    );
}