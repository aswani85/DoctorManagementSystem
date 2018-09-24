package com.bartek.hospitaldoctor;

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

import com.bartek.doctor.DoctorDao;

@RestController
public class HospitalDoctorController {

	@Autowired
	HospitalDoctorService hospitalDoctorService;

	@Autowired
	DoctorDao doctorDao;

	@GetMapping(value = "/api/hospitaldoctors")
	public List<HospitalDoctor> getAll() {
		return hospitalDoctorService.getAll();
	}

	@GetMapping(value = "/api/hospitaldoctors/{hospitalId}")
	public List<HospitalDoctor> getDoctors(@PathVariable int hospitalId) {
		return hospitalDoctorService.getAllDoctorsForHospital(hospitalId);
	}

	@PostMapping(value = "/api/hospitals/{hospitalId}/doctors/{doctorId}")
	public void addHospitalDoctor(@Valid @RequestBody HospitalDoctor hospitalDoctor, @PathVariable int doctorId,
			@PathVariable int hospitalId) {
		hospitalDoctor.setDoctorId(doctorId);
		hospitalDoctor.setHospitalId(hospitalId);
		hospitalDoctorService.addHospitalDoctor(hospitalDoctor);
	}

	@Transactional
	@RequestMapping(method = RequestMethod.DELETE, value = "/api/hospitals/{hospitalId}/doctors/{doctorId}")
	public void deleteHospitalDoctor(@PathVariable int hospitalId, @PathVariable int doctorId) {
		hospitalDoctorService.deleteByHospitalIdAndDoctorId(hospitalId, doctorId);
	}

}
