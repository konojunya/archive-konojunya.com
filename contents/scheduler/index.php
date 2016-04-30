<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no">

  <link rel="stylesheet" href="stylesheets/lib/sanitize.min.css">
  <link rel="stylesheet" href="stylesheets/lib/font-awesome.min.css">
  <link rel="stylesheet" href="stylesheets/lib/bootstrap.min.css">

  <title>Scheduler HAL</title>

</head>

<body>

	<header id="header">
		<div class="row">
			<h1 class="text-center" style="margin: 10% 0;">HAL Scheduler</h1>
		</div>
	</header>

	<div class="container">
		<form class="form-horizontal" action="./login/signin.php" method="post">
			<div class="form-group">
				<label for="inputId" class="col-sm-2 control-label">ID</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" id="inputId" placeholder="Input your ID">
				</div>
			</div>
	  	<div class="form-group">
	    	<div class="col-sm-offset-2 col-sm-10">
	     		<button type="submit" class="btn btn-default">Sign in</button>
	    	</div>
	  	</div>
		</form>
		<div class="row">
			<a class="btn btn-primary col-xs-8 col-xs-offset-2 signup-btn" href="./login/signup.php" role="button">まだ登録されていない方</a>
		</div>
	</div>

	<script src="./javascripts/lib/jquery.min.js"></script>
	<script src="./javascripts/lib/bootstrap.min.js"></script>
</body>

</html>