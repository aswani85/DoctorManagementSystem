package com.bartek.doctor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class DoctorService {

	@Autowired
	private DoctorDao doctorDao;
	
	public List<Doctor> getAllDoctors(){
		List<Doctor> doctors = new ArrayList<>();
		doctorDao.findAll().forEach(doctors::add);
		return doctors;
	}
	
	
	public Doctor getDoctor(int id) {
			return doctorDao.findOne(id);
	}
	
	
	public void addDoctor(Doctor doctor) {
		doctorDao.save(doctor);
	}
	
	public void updateDoctor(Doctor doctor, int id) {
		doctorDao.save(doctor);
	}
	
	public void updateDoctorBuffer(Doctor doctor, int id) {
		doctor.setLicenseNumber(0);
		doctorDao.save(doctor);
	}
	
	
	public void deleteDoctor(int id) {
		doctorDao.delete(id);
	}
	
	
	
}
