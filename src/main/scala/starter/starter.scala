package scalajs.starter

import scala.scalajs.js
import js.annotation.{ JSExportAll, JSGlobalScope }

@js.native
@JSGlobalScope
object Globals extends js.Object {
  var globalThis: js.Dynamic = js.native
  // uncomment and npm run example-vanillajs for fun
  // var StarterClassInstance: StarterClass = js.native 
  // var Starter: StarterObject = js.native
}

sealed trait StarterObject

@JSExportAll
object Starter extends StarterObject {
  val someval: String = "some starter object value"
  
  def greet(name: String): Unit = {
    Globals.globalThis.console.log(s"Hello, $name!")
  }

  def main(args: Array[String]): Unit = {
    Globals.globalThis.console.log("Hello from Scala.js starter object!")
    
    
    Globals.globalThis.Starter = this.asInstanceOf[js.Any];
    // uncomment and npm run example-vanillajs for fun
    // Globals.Starter = this
    // Globals.StarterClassInstance = new StarterClass()
  }
}

@JSExportAll
class StarterClass {
  val someval: String = "some starter class value"
  
  def greet(name: String): Unit = {
    Globals.globalThis.console.log(s"Hello, $name!")
  }
}
