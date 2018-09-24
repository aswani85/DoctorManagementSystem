package com.bartek.hospital;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bartek.doctor.DoctorService;

@RestController
public class HospitalController {
	@Autowired
	HospitalService hospitalService;

	@Autowired
	DoctorService doctorService;
	
	@GetMapping(value = "/api/hospitals")
	public List<Hospital> getAllHospitals() {
		return hospitalService.getAllHospitals();
	}

	@GetMapping(value = "/api/hospitals/{id}")
	public Hospital getHospital(@PathVariable int id) {
		return hospitalService.getHospital(id);
	}

	@PostMapping(value = "/api/hospitals")
	public void addHospital(@Valid @RequestBody Hospital hospital){
		
		hospitalService.addHospital(hospital);
	}

	
	@RequestMapping(method = RequestMethod.PUT, value = "/api/hospitals/{id}")
	public void updateHospital(@RequestBody Hospital hospital, @PathVariable int id) {
		String buffer = hospital.getName();
		hospitalService.updateHospitalBuffer(id, hospital);
		hospital.setName(buffer);
		hospitalService.updateHospital(id, hospital);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/api/hospitals/{id}")
	public void deleteHospital(@PathVariable int id) {
		hospitalService.deleteHospital(id);
	}
	

	
	///@RequestMapping(method = RequestMethod.PUT, value= "/api/hospitals/{id}/doctors")
	
	
	
}
