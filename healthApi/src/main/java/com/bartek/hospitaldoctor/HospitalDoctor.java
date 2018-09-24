package com.bartek.hospitaldoctor;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.bartek.doctor.Doctor;
import com.bartek.hospital.Hospital;
import com.bartek.validators.ValidDates;

@Entity
@ValidDates(message = "Start Date have to be earlier than End Date")
@Table(name = "hospital_doctor")
@IdClass(Hosdoc.class)
public class HospitalDoctor implements Serializable {

	@Id
	private int hospitalId;

	@Id
	private int doctorId;


	// fields of hospitalDoctor table

	@Temporal(TemporalType.DATE)
	private Date contractStartDate;
	@Temporal(TemporalType.DATE)
	private Date contractEndDate;
	private String position;
	private String supervisor;
	private boolean partTime;

	@ManyToOne
	@JoinColumn(name="HospitalId", insertable = false, updatable = false)
	private Hospital hospital;

	@ManyToOne
	@JoinColumn(name="DoctorId", insertable = false, updatable = false)
	private Doctor doctor;

	// GETTERS AND SETTERS....

	public HospitalDoctor() {

	}
	
	

	public HospitalDoctor( Date contractStartDate, Date contractEndDate, String position,
			String supervisor, boolean partTime) {
		super();

		this.contractStartDate = contractStartDate;
		this.contractEndDate = contractEndDate;
		this.position = position;
		this.supervisor = supervisor;
		this.partTime = partTime;
	}



	public Date getContractStartDate() {
		return contractStartDate;
	}

	public void setContractStartDate(Date contractStartDate) {
		this.contractStartDate = contractStartDate;
	}

	public Date getContractEndDate() {
		return contractEndDate;
	}

	public void setContractEndDate(Date contractEndDate) {
		this.contractEndDate = contractEndDate;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getSupervisor() {
		return supervisor;
	}

	public void setSupervisor(String supervisor) {
		this.supervisor = supervisor;
	}

	public boolean isPartTime() {
		return partTime;
	}

	public void setPartTime(boolean partTime) {
		this.partTime = partTime;
	}

	public int getHospitalId() {
		return hospitalId;
	}

	public void setHospitalId(int hospitalId) {
		this.hospitalId = hospitalId;
	}

	public int getDoctorId() {
		return doctorId;
	}

	


	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}



	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

}
