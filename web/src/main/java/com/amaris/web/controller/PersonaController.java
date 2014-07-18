package com.amaris.web.controller;

import java.rmi.RemoteException;

import javax.inject.Inject;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.amaris.web.beans.Mensaje;
import com.amaris.web.beans.Persona;
import com.amaris.web.webservice.ShakespeareSoap;

@Controller
public class PersonaController {

	private final static Log LOG = LogFactory.getLog(PersonaController.class);

	@Inject
	private ShakespeareSoap shakespeareSoap;

	@RequestMapping(value = "/post", method = RequestMethod.POST)
	public @ResponseBody
	Mensaje doPost(@RequestBody Persona persona) throws RemoteException {
		LOG.info("Post al server con los datos " + persona.getName() + " "
				+ persona.getTlf());
		String shakespeareResult = shakespeareSoap.getSpeech(persona.getName());
		Mensaje result = new Mensaje();
		result.setMensaje(shakespeareResult + " " + persona.getTlf());
		return result;
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String printHome() {
		LOG.info("Ir a pagina de home");
		return "index";
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String printRoot() {
		LOG.info("Ir a pagina de home");
		return "index";
	}

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public String test() {
		LOG.info("Ir a pagina de tests");
		return "testRunner";
	}

}
