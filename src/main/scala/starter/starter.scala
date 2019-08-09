package scalajs.starter

import scala.scalajs.js
import js.annotation.{ JSExportAll }

sealed trait StarterObject

@JSExportAll
object Starter extends StarterObject {
  val someval: String = "some starter object value"
  
  def greet(name: String): Unit = {
    js.Dynamic.global.global.console.log(s"Hello, $name!")
  }

  def main(args: Array[String]): Unit = {
    js.Dynamic.global.global.console.log("Hello from Scala.js starter object!")
    js.Dynamic.global.global.Starter = this.asInstanceOf[js.Any];
    js.Dynamic.global.global.StarterClassInstance = new StarterClass().asInstanceOf[js.Any];
  }
}

@JSExportAll
class StarterClass {
  val someval: String = "some starter class value"
  
  def greet(name: String): Unit = {
    js.Dynamic.global.global.console.log(s"Hello, $name!")
  }
}
