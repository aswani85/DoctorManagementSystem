package com.bartek.doctor;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;

import com.bartek.hospitaldoctor.HospitalDoctor;
import com.bartek.validators.UniqueLicenseNumber;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Doctor {

	@JsonBackReference
	@OneToMany(mappedBy = "doctor", fetch = FetchType.LAZY)
	private List<HospitalDoctor> hospitals;

	@Id
	@Column(name = "Id")
	int id;

	@Column(name = "name")
	String name;

	@Column(name = "surname")
	String surname;

	@Column(name = "title")
	String title;

	@Column(name = "license_number")
	@UniqueLicenseNumber(message="Such license number already exists")
	int licenseNumber;

	@Column(name = "phone")
	String phone;

	@Column(name = "email")
	String email;

	@Column(name = "nationality")
	String nationality;

	@Column(name = "speciality")
	@Size(min=3, message = "Min 3 characters")
	String speciality;

	@Temporal(TemporalType.DATE)
	@Column(name = "date_of_birth")
	Date dateOfBirth;

	@Column(name = "is_a_teacher")
	boolean isATeacher;

	public Doctor() {

	}
	
	

	public Doctor(int id, String name, String surname, String title, int licenseNumber, String phone, String email,
			String nationality, String speciality, Date dateOfBirth, boolean isATeacher) {
		super();
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.title = title;
		this.licenseNumber = licenseNumber;
		this.phone = phone;
		this.email = email;
		this.nationality = nationality;
		this.speciality = speciality;
		this.dateOfBirth = dateOfBirth;
		this.isATeacher = isATeacher;
	}



	public List<HospitalDoctor> getHospitals() {
		return hospitals;
	}

	public void setHospitals(List<HospitalDoctor> hospitals) {
		this.hospitals = hospitals;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getLicenseNumber() {
		return licenseNumber;
	}

	public void setLicenseNumber(int licenseNumber) {
		this.licenseNumber = licenseNumber;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getSpeciality() {
		return speciality;
	}

	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public boolean isATeacher() {
		return isATeacher;
	}

	public void setATeacher(boolean isATeacher) {
		this.isATeacher = isATeacher;
	}

}
