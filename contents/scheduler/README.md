#HAL Schedules

##Models

- User Model

|Property 	|Type     |
|:----------|:-------:|
|id       	|String 	|
|password 	|String 	|
|department	|String 	|


- Schedules Model

|Property			|Type		|
|:------------|:-----:|
|monday				|Object	|
|tuesday			|Object	|
|wednesday		|Object	|
|thursday			|Object	|
|friday				|Object	|
|createUser		|String	|
|ScheduleName	|String	|

|Object		|Type	 |
|:--------|:----:|
|prefix		|String|
|subject	|String|
|roomNum	|String|

##API

|Method	|URL             |Memo                                                                      											|
|:------|:--------------:|:-----------------------------------------------------------------------------------------------|
|GET    |/               |クッキーを見て、index or main                                                     								|
|POST   |/login          |/からのidをもとにデータベース参照。クッキーをもたせてredirect / or /signup                         |
|GET    |/signup         |新規登録。signup.ectを返す                                                        								|
|POST   |/singup         |id.password.classを見てidはユニークなので、すでにあればsignup.ectなければsignup-addschedule.ect 		|
|POST   |/addSchedules   |siignup-addからのデータを保存→クッキーをもたせてredirect / or 保存できなかったらsignup-addを返す		|
