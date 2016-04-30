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
  <link rel="stylesheet" href="../stylesheets/src/style.css">

</head>

<body>

	<div class="container-fluid">
		<div class="row">
			<h2 class="text-center">
				New User
			</h2>
		</div>
	</div>

	<div class="container-fluid">
		<p class="text-center">Add Schedules</p>
		<div class="table-responsive">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th></th>
						<th>月</th>
						<th>火</th>
						<th>水</th>
						<th>木</th>
						<th>金</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>1限</th>
						<td class="g1" name="月曜１限目"></td>
						<td class="k1" name="火曜１限目"></td>
						<td class="s1" name="水曜１限目"></td>
						<td class="m1" name="木曜１限目"></td>
						<td class="f1" name="金曜１限目"></td>
					</tr>
					<tr>
						<th>2限</th>
						<td class="g2" name="月曜２限目"></td>
						<td class="k2" name="火曜２限目"></td>
						<td class="s2" name="水曜２限目"></td>
						<td class="m2" name="木曜２限目"></td>
						<td class="f2" name="金曜２限目"></td>
					</tr>
					<tr>
						<th>3限</th>
						<td class="g3" name="月曜３限目"></td>
						<td class="k3" name="火曜３限目"></td>
						<td class="s3" name="水曜３限目"></td>
						<td class="m3" name="木曜３限目"></td>
						<td class="f3" name="金曜３限目"></td>
					</tr>
					<tr>
						<th>4限</th>
						<td class="g4" name="月曜４限目"></td>
						<td class="k4" name="火曜４限目"></td>
						<td class="s4" name="水曜４限目"></td>
						<td class="m4" name="木曜４限目"></td>
						<td class="f4" name="金曜４限目"></td>
					</tr>
					<tr>
						<th>5限</th>
						<td class="g5" name="月曜５限目"></td>
						<td class="k5" name="火曜５限目"></td>
						<td class="s5" name="水曜５限目"></td>
						<td class="m5" name="木曜５限目"></td>
						<td class="f5" name="金曜５限目"></td>
					</tr>
				</tbody>
			</table>
		</div>

		<p>コマをタッチして科目を追加してください。</p>

		<div class="row inputSchedule hidden">
			<strong style="display: block;font-size: 1.3rem;text-align: center;" class="days">月曜１限目</strong>
			<div class="form-group">
				<label for="inputSubject" class="col-sm-2 control-label">科目記号</label>
				<div class="col-sm-8">
					<input type="text" class="form-control inputText" id="inputSubject" placeholder="CS11" v-model="text" required>
				</div>
			</div>
			<div class="form-group">
				<label for="inputRoomNum" class="col-sm-2 control-label">教室番号</label>
				<div class="col-sm-8">
					<input type="number" class="form-control inputNum" id="inputRoomNum" placeholder="071" required>
				</div>
			</div>
			<div class="row" style="margin: 3% 0;">
				<div class="col-xs-5">
					<button class="btn btn-default add">追加</button>
				</div>
				<div class="col-xs-5">
					<button class="btn btn-default">完了</button>
				</div>
			</div>
		</div>
	</div>

	<script src="../javascripts/lib/jquery.min.js"></script>
	<script src="../javascripts/lib/bootstrap.min.js"></script>
	<script src="../javascripts/lib/vue.min.js"></script>
	<script src="../javascripts/src/signup.js"></script>
</body>

</html>