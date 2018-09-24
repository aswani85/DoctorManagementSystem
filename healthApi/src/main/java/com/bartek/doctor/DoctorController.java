package com.bartek.doctor;

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

@RestController
public class DoctorController {
	@Autowired
	DoctorService doctorService;
	
	
	
	@GetMapping(value="/api/doctors")
	public List<Doctor> getAllDoctors(){
		return doctorService.getAllDoctors();
	}
	
	@GetMapping(value="/api/doctors/{id}")
	public Doctor getDoctor(@PathVariable int id) {
		return doctorService.getDoctor(id);
	}
	
	@Transactional
	@PostMapping(value="/api/doctors")
	public void addDoctor(@Valid @RequestBody Doctor doctor) {
		doctorService.addDoctor(doctor);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/api/doctors/{id}")
	public void updateDoctor(@RequestBody Doctor doctor, @PathVariable int id){
		int buffer = doctor.getLicenseNumber();
		doctorService.updateDoctorBuffer(doctor, id);
		doctor.setLicenseNumber(buffer);
		doctorService.updateDoctor(doctor, id);
	}
	
	
	
	@RequestMapping(method=RequestMethod.DELETE, value="/api/doctors/{id}")
	public void deleteDoctor(@PathVariable int id) {
		doctorService.deleteDoctor(id);
	}
	
	
	/*
	@GetMapping(value = "api/hospitals/{hospitalsId}/doctors")
	public List<Doctor> getDoctorsByHospitalId(@PathVariable int hospitalsId){
		return doctorService.getDoctorsByHospital(hospitalsId);
	}*/

	

}
