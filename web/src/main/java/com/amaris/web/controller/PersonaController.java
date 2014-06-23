package com.amaris.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.amaris.web.beans.Mensaje;
import com.amaris.web.beans.Persona;

@Controller
public class PersonaController {

	@RequestMapping(value = "/post", method = RequestMethod.POST)
	public @ResponseBody
	Mensaje doPost(@RequestBody Persona persona) {
		Mensaje result = new Mensaje();
		result.setMensaje(persona.getName() + " " + persona.getTlf());
		return result;
	}
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
    public String printHome() {
           return "index";
    }
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String printRoot() {
           return "index";
    }

}
