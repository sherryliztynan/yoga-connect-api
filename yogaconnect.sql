CREATE DATABASE yogaconnect;
USE yogaconnect;
CREATE TABLE yogateachers (
    ID INT auto_increment,
    nameFirst varchar(255),
    nameLast varchar(255),
    onlineAvailability varchar(255),
    specialization varchar(255),
    contactInformation varchar(255),
    PRIMARY KEY (ID)
);
INSERT INTO yogateachers (nameFirst, nameLast, onlineAvailability, specialization, contactInformation)
VALUES (
        'Brytta',
        'Byers,
        'yes',
        'Vinyassa',
        'Brytta@gmail.com',
    ),
    (
        'Danielle',
        'Storm,
        'yes',
        'Prenatal',
        'Danielle@gmail.com',
    ),
    (
        'Dianne',
        'Bondy,
        'yes',
        'Gentle Yoga',
        'Dianne@gmail.com',
    ),
    (
        'Megan',
        'Eaton',
        'yes',
        'Yoga Wellness',
        'Megan@gmail.com',
    ),

SELECT *
FROM yogateachers;

CREATE TABLE yogareasons (
    ID INT auto_increment,
    reason VARCHAR(255),
    details MEDIUMTEXT(16,777,215),
    PRIMARY KEY (ID)
);

INSERT INTO yogateachers (reason, details)
VALUES (
        'Health',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum id dui id volutpat. Fusce ut lacinia ipsum, nec dapibus mi. Curabitur non malesuada ante, sed viverra metus. Fusce eget est ac magna varius semper. Phasellus sed nisl faucibus, finibus ligula non, congue sapien. Donec feugiat dolor urna, sit amet gravida arcu sodales a. Nullam fringilla libero purus, at imperdiet lorem consequat quis. Phasellus rutrum elementum lectus, eget eleifend urna fringilla tincidunt.'
    ),

    (
        'Stress Relief',
        'Ut purus velit, molestie vitae laoreet quis, dictum eu dolor. Donec condimentum suscipit libero, sit amet congue est mollis gravida. Fusce laoreet pulvinar magna, ac volutpat tortor mollis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
    ),
    (
        'Increased Focus',
        'Suspendisse nulla lacus, tincidunt id risus mollis, fringilla scelerisque odio. In ut cursus ipsum. Maecenas accumsan ullamcorper nisl mollis ultricies. '
    ),
SELECT *
FROM yogareasons;