<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  </head>

  <style>
    .b1 {
        margin-left: 10px;
    }

    body {
        background-color: rgb(241, 241, 240);
    }

    .flex {
        display: flex;
    }

    .container1 {
        margin-top: 250px;
        margin-left: 80px
    }

    .container2 {
        margin-top: 70px;
        margin-left: 150px;
    }

    .img1 {
        border-radius: 200px;
        text-align: center;
    }

    hr {
        margin-top: 80px;
    }

    .text {
        text-align: center;
        margin-top: 40px;
    }

    table {
        margin-top: 50px;
        table-layout: fixed;

    }


    tr {
        border: 2px solid rgb(6, 6, 6);
        /* text-align: center; */

    }

    td {
        border: 2px solid black;
        width:33%
    }

    .footer {
        padding-top: 20px;
        width: 100%;
        min-height: 40px;
        text-align: center;
        background: #e5e2e2;
    }

    @media (max-width:1143px) {

        .container1 {
            margin-top: 80px;
            text-align: center;
        }

        .flex {
            all: revert;
            text-align: center;
            flex-direction: column;
        }

        .container1{
            all:revert;
            margin-top: 100px;
        }
        .container2{
            margin-top: 60px;
            all:revert;
        }
        .img1 {
            all:revert;
            width: 85%;
            height: 85%;
        border-radius: 200px;
        text-align: center;
        align-items: center;
    }

    p{
        font-size: 14px;
        padding-left: 5px;
    }

    .f1{
        margin-top: -20px;
    }


    }

  

</style>

  <body>
    <div class="container text-center">
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <img style="max-width: 150px;" src="../img/user.png" alt="">
              <h1>Users</h1>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <img style="max-width: 150px;" src="../img/user.png" alt="">
              <h1>Tours</h1>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <img style="max-width: 150px;" src="../img/user.png" alt="">
              <h1>Explores</h1>
            </div>
          </div>
        </div>
      </div>


        <div class="row mt-5">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <img style="max-width: 150px;" src="../img/user.png" alt="">
                <h1>Tours</h1>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <img style="max-width: 150px;" src="../img/user.png" alt="">
                <h1>Explores</h1>
              </div>
            </div>
          </div>
        </div>
      </div>


<br> <br> <br>

<div class="container" id="con"> <!-- container used to leave margin from all the side  -->
  <h1 class="text">Choose Your Trip</h1>
  <h2>India</h2>
  <div class="row">
      <article class="card col">
          <img class="card-img cardimg" src="img/banglore2.jpg" alt="" height="65%">
          <h4 align="center">Banglore</h4>
          <p>Everest base camp track is without a doubt, one of the most renowned travel destinations in the
              world.</p>
          <a href="signup.php" class="ctn">View Details</a>
      </article>
      <article class="card col">
          <img class="card-img" src="img/delhi.jpg" alt="" height="65%">
          <h4 align="center">Delhi</h4>
          <p>Everest base camp track is without a doubt, one of the most renowned travel destinations in the
              world.</p>
          <a href="signup.php" class="ctn">View Details</a>
      </article>
      <article class="card col">
          <img class="card-img" src="img/nepal1.jpg" alt="" height="65%">
          <h4 align="center">Nepal</h4>
          <p>Everest base camp track is without a doubt, one of the most renowned travel destinations in the
              world.</p>
          <a href="signup.php" class="ctn">View Details</a>
      </article>
  </div><br>
  <h2>Europe</h2>
  <div class="row">
      <article class="card col">
          <img class="card-img cardimg1" src="img/usa1.jpg" alt="" height="65%">
          <h4 align="center">USA</h4>
          <p>Everest base camp track is without a doubt, one of the most renowned travel destinations in the
              world.</p>
          <a href="signup.php" class="ctn">View Details</a>
      </article>
      <article class="card col">

          <img class="card-img " src="img/everest1.jpg" alt="" height="65%">
          <h4 align="center">Everest</h4>
          <p>Everest base camp track is without a doubt, one of the most renowned travel destinations in the
              world.</p>

          <a href="signup.php" class="ctn">View Details</a>
      </article>
      <article class="card col">
          <img class="card-img "  src="img/russia.jpg" alt="" height="65%">
          <h4 align="center">Rassia</h4>
          <p>Everest base camp track is without a doubt, one of the most renowned travel destinations in the
              world.</p>
          <a href="signup.php" class="ctn">View Details</a>
      </article>




      <article class="card col">
          <?php
          echo $sum;
          ?>
      </article>
  </div>
</div>



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  <!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>
</html>