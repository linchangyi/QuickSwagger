# QuickSwagger

之前都是使用wiki来写前后端的api交互文档，十分痛苦。后来发现Swagger这个框架，相见恨晚。

我们团队在公司内部的服务器中部署了swaager-editor这个工具作为api文档的编写与查看工具。但是使用过程中，有一个很麻烦的问题，每次要查看最新的api文档，都要到git仓库中下载最新的文档，然后通过文件导入的方式来查看，经过了七八次的鼠标点击才能达到最终目的。

所以写了这个chrome插件来解决上述问题，只需要一次点击即可从git仓库中下载最新文档，并在浏览器上的swagger-editor上显示。（注：由于跨域问题，需要将swagger-editor和git仓库部署在同一个域名上）

使用方式：
- chrome浏览器安装插件，进入插件的选项页面，按照说明设置api文档的位置。
- 打开已经部署好的swagger-editor
- 点击地址栏右侧的扩展按钮，Enjoy it。