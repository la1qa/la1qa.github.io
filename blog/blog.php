<?php
session_start();

// Set your password
$correct_password = "blog123";

// Handle login form submission
if(isset($_POST['password'])) {
    if($_POST['password'] === $correct_password) {
        $_SESSION['authenticated'] = true;
    } else {
        $error = "Incorrect password!";
    }
}

// If not authenticated, show the login form
if(!isset($_SESSION['authenticated'])):
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login to Blog</title>
    <style>
        body {
            font-family: "Comic Sans MS", cursive, sans-serif;
            background: #ffccff url('https://www.toptal.com/designers/subtlepatterns/patterns/pw_maze_white.png');
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        form {
            background: white;
            padding: 30px;
            border: 3px double #ff69b4;
            text-align: center;
        }
        input[type="password"] {
            padding: 10px;
            font-size: 16px;
            margin-top: 10px;
        }
        button {
            padding: 10px 20px;
            margin-top: 10px;
            font-size: 16px;
            background: #ff69b4;
            color: white;
            border: 2px solid #ff1493;
            cursor: pointer;
        }
        button:hover {
            background: #ff1493;
        }
        .error { color: red; margin-top: 10px; }
    </style>
</head>
<body>
    <form method="post">
        <h1>Enter the password to access the blog</h1>
        <input type="password" name="password" placeholder="Password" required>
        <br>
        <button type="submit">Enter</button>
        <?php if(isset($error)) echo "<div class='error'>$error</div>"; ?>
    </form>
</body>
</html>

<?php
exit();
endif;
?>

<!-- Secure Blog Content -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My 2000s Blog</title>
    <style>
        body {
            font-family: "Comic Sans MS", cursive, sans-serif;
            background: #ffccff url('https://www.toptal.com/designers/subtlepatterns/patterns/pw_maze_white.png');
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 900px;
            margin: 20px auto;
            background: #ffffff;
            border: 3px double #ff69b4;
            padding: 20px;
            box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
        }
        header {
            text-align: center;
            background: #ff69b4;
            color: white;
            padding: 20px 0;
            border-bottom: 3px solid #ff1493;
        }
        header h1 { margin:0; font-size:48px; text-shadow:2px 2px #ff1493; }
        nav {
            float: left;
            width: 200px;
            background: #ffe4e1;
            padding: 15px;
            margin-right: 20px;
            border: 2px dashed #ff69b4;
        }
        nav a { display:block; text-decoration:none; color:#ff1493; margin-bottom:10px; font-weight:bold; }
        nav a:hover { text-decoration:underline; }
        .content { overflow:hidden; }
        article { margin-bottom:30px; border-bottom:1px dotted #ff69b4; padding-bottom:10px; }
        article h2 { color:#ff1493; }
        article p { line-height:1.5; }
        footer { text-align:center; padding:15px; background:#ff69b4; color:white; margin-top:20px; border-top:3px solid #ff1493; }
        .blinky { width:50px; vertical-align:middle; }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>My Awesome Blog</h1>
        </header>
        <div class="content">
            <nav>
                <h3>Links</h3>
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Archives</a>
                <a href="#">Contact</a>
            </nav>
            <main>
                <article>
                    <h2>Welcome to My Blog! <img src="https://i.gifer.com/ZZ5H.gif" class="blinky" alt="GIF"></h2>
                    <p>Hello internet! This is my totally rad blog from the 2000s era. I love glitter backgrounds, flashy fonts, and pixelated icons. Stay tuned for my thoughts on life, music, and more!</p>
                </article>
                <article>
                    <h2>My Top 5 Songs of the 2000s</h2>
                    <p>1. Song A<br>2. Song B<br>3. Song C<br>4. Song D<br>5. Song E</p>
                </article>
            </main>
        </div>
        <footer>
            &copy; 2005 My Awesome Blog. All rights reserved.
        </footer>
    </div>
</body>
</html>
