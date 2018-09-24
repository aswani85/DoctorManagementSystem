package com.bartek.hospital;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import com.bartek.doctor.Doctor;
import com.bartek.hospitaldoctor.HospitalDoctor;
import com.bartek.validators.UniqueHospitalName;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Hospital {

	@JsonBackReference
	@OneToMany(mappedBy="hospital", fetch = FetchType.LAZY)
	private List<HospitalDoctor> doctors;
	@Id
	@Column(name = "Id")
	private int id;
	@Column(name = "name")
	@UniqueHospitalName(message = "Hospital with this name already exists")
	private String name;
	@Column(name = "country")
	private String country;
	@Column(name = "town")
	private String town;
	@Column(name = "street")
	private String street;
	@Column(name = "postal_code")
	private String postalCode;
	@Column(name = "phone_number")
	private String phoneNumber;
	@Column(name = "fax_number")
	private String faxNumber;
	@Column(name = "number_of_ambulances")
	private int numberOfAmbulances;
	@Column(name = "helicopter_access")
	private boolean helicopterAccess;
	@Column(name = "teaching_hospital")
	private boolean teachingHospital;

	public Hospital() {

	}

	public Hospital(List<HospitalDoctor> doctors, int id, String name, String country, String town, String street,
			String postalCode, String phoneNumber, String faxNumber, int numberOfAmbulances, boolean helicopterAccess,
			boolean teachingHospital) {
		super();
		this.doctors = doctors;
		this.id = id;
		this.name = name;
		this.country = country;
		this.town = town;
		this.street = street;
		this.postalCode = postalCode;
		this.phoneNumber = phoneNumber;
		this.faxNumber = faxNumber;
		this.numberOfAmbulances = numberOfAmbulances;
		this.helicopterAccess = helicopterAccess;
		this.teachingHospital = teachingHospital;
	}

	public List<HospitalDoctor> getDoctors() {
		return doctors;
	}

	public void setDoctors(List<HospitalDoctor> doctors) {
		this.doctors = doctors;
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

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getTown() {
		return town;
	}

	public void setTown(String town) {
		this.town = town;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getFaxNumber() {
		return faxNumber;
	}

	public void setFaxNumber(String faxNumber) {
		this.faxNumber = faxNumber;
	}

	public int getNumberOfAmbulances() {
		return numberOfAmbulances;
	}

	public void setNumberOfAmbulances(int numberOfAmbulances) {
		this.numberOfAmbulances = numberOfAmbulances;
	}

	public boolean isHelicopterAccess() {
		return helicopterAccess;
	}

	public void setHelicopterAccess(boolean helicopterAccess) {
		this.helicopterAccess = helicopterAccess;
	}

	public boolean isTeachingHospital() {
		return teachingHospital;
	}

	public void setTeachingHospital(boolean teachingHospital) {
		this.teachingHospital = teachingHospital;
	}

	public void addDoctor(Doctor doctor, boolean partTime, Date contractEndDate, Date contractStartDate,
			String position, String supervisor) {
		HospitalDoctor association = new HospitalDoctor();
		association.setDoctor(doctor);
		association.setHospital(this);
		association.setDoctorId(doctor.getId());
		association.setHospitalId(this.getId());
		association.setContractStartDate(contractStartDate);
		association.setContractEndDate(contractEndDate);
		association.setPosition(position);
		association.setSupervisor(supervisor);
		association.setPartTime(partTime);

		doctors.add(association);
	}

}
