const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-mail', async(req, res) => {
    //メール送信処理
    const {email, message} = req.body;
    //メール送信設定
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'test@gmail.com',
            pass: '', //２段階認証を行い、アプリパスワードを入れる
        }
    })

    const SendMailOptions = {
        from: 'test@gmail.com',
        to: email,
        subject: 'お問い合わせありがとうございます。',
        text: message,
    }

    const ReceiveMailOptions = {
        from: 'test@gmail.com',
        to: 'test@gmail.com',
        subject: 'ホームページからのお問い合わせ',
        text: `Email: ${email}\n/n本文: ${message}`,
    }

    try {
        await transporter.sendMail(SendMailOptions);
        await transporter.sendMail(ReceiveMailOptions);
        req.status(200).json({message:'メールが送信されました。' });
    } catch (error) {
        console.log(error);
        req.status(500).json({ message: 'メールの送信に失敗しました。'});
        
    }

    
})

app.listen(port, () => {
    console.log(`サーバーがポート ${port}で起動しました。`)
});
