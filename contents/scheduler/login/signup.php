<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=no">

  <title>新規登録</title>

  <link rel="stylesheet" href="../stylesheets/lib/sanitize.min.css">
  <link rel="stylesheet" href="../stylesheets/lib/font-awesome.min.css">
  <link rel="stylesheet" href="../stylesheets/lib/bootstrap.min.css">

</head>

<body>

	<div class="container-fluid">
		<div class="row">
			<h1 class="text-center">
				New User
			</h1>
		</div>
	</div>

	<div class="container-fluid">
		<form action="data.php" method="post">
			<div class="form-group">
				<label for="inputId" class="col-sm-2 control-label">ID</label>
				<div class="col-sm-8">
					<input type="text" class="form-control" id="inputId" placeholder="Set your ID..." name="id">
				</div>
			</div>
			<div class="form-group">
				<label for="password" class="col-sm-2 control-label">Password</label>
				<div class="col-sm-8">
					<input type="password" class="form-control" id="inputId" placeholder="Set your Password..." name="password">
				</div>
			</div>
	  	<div class="form-group">
	    	<div class="col-sm-offset-2 col-sm-10">
	     		<button type="submit" class="btn btn-default">Next</button>
	    	</div>
	  	</div>
		</form>
	</div>

	<script src="../javascripts/lib/jquery.min.js"></script>
	<script src="../javascripts/lib/bootstrap.min.js"></script>
</body>

</html>