package scalajs.starter

import scala.scalajs.js
import js.annotation.{ JSExport, JSExportTopLevel }

@JSExportTopLevel("Starter")
object Starter {
  @JSExport
  val someval: String = "some starter object value"
  
  @JSExport
  def greet(name: String): Unit = {
    println(s"Hello, $name!")
  }

  def main(args: Array[String]): Unit = {
    println("Hello from Scala.js starter object!")
  }
}

@JSExportTopLevel("StarterClass")
class StarterClass {
  @JSExport
  val someval: String = "some starter class value"
  
  @JSExport
  def greet(name: String): Unit = {
    println(s"Hello, $name!")
  }
}
