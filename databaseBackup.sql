--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

-- Started on 2017-11-27 21:58:28

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2842 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 16395)
-- Name: clients; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE clients (
    client_id integer NOT NULL
);


ALTER TABLE clients OWNER TO "user";

--
-- TOC entry 201 (class 1259 OID 16428)
-- Name: hibernate_sequence; Type: SEQUENCE; Schema: public; Owner: user
--

CREATE SEQUENCE hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hibernate_sequence OWNER TO "user";

--
-- TOC entry 197 (class 1259 OID 16400)
-- Name: meters; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE meters (
    meter_id integer NOT NULL,
    client_id integer
);


ALTER TABLE meters OWNER TO "user";

--
-- TOC entry 198 (class 1259 OID 16405)
-- Name: periods; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE periods (
    period_id integer NOT NULL,
    month integer,
    year integer
);


ALTER TABLE periods OWNER TO "user";

--
-- TOC entry 202 (class 1259 OID 16445)
-- Name: rates; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE rates (
    rate_id integer NOT NULL,
    price numeric(19,2),
    period_id integer,
    tariff_id integer
);


ALTER TABLE rates OWNER TO "user";

--
-- TOC entry 199 (class 1259 OID 16415)
-- Name: readings; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE readings (
    reading_id integer NOT NULL,
    end_date timestamp without time zone,
    reading numeric(19,2),
    start_date timestamp without time zone,
    meter_id integer,
    tariff_id integer
);


ALTER TABLE readings OWNER TO "user";

--
-- TOC entry 200 (class 1259 OID 16420)
-- Name: tariffs; Type: TABLE; Schema: public; Owner: user
--

CREATE TABLE tariffs (
    tariff_id integer NOT NULL,
    equation character varying(255),
    tariff_symbol character varying(255)
);


ALTER TABLE tariffs OWNER TO "user";

--
-- TOC entry 2829 (class 0 OID 16395)
-- Dependencies: 196
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: user
--

COPY clients (client_id) FROM stdin;
44
58
92
\.


--
-- TOC entry 2830 (class 0 OID 16400)
-- Dependencies: 197
-- Data for Name: meters; Type: TABLE DATA; Schema: public; Owner: user
--

COPY meters (meter_id, client_id) FROM stdin;
47	44
61	58
46	44
93	92
\.


--
-- TOC entry 2831 (class 0 OID 16405)
-- Dependencies: 198
-- Data for Name: periods; Type: TABLE DATA; Schema: public; Owner: user
--

COPY periods (period_id, month, year) FROM stdin;
52	1	2017
55	2	2017
96	3	2017
\.


--
-- TOC entry 2835 (class 0 OID 16445)
-- Dependencies: 202
-- Data for Name: rates; Type: TABLE DATA; Schema: public; Owner: user
--

COPY rates (rate_id, price, period_id, tariff_id) FROM stdin;
54	15.00	55	43
57	12.00	52	43
90	65.00	55	62
\.


--
-- TOC entry 2832 (class 0 OID 16415)
-- Dependencies: 199
-- Data for Name: readings; Type: TABLE DATA; Schema: public; Owner: user
--

COPY readings (reading_id, end_date, reading, start_date, meter_id, tariff_id) FROM stdin;
50	2017-01-31 01:00:00	1234.50	2017-01-01 01:00:00	46	43
51	2017-02-28 01:00:00	2034.50	2017-02-01 01:00:00	47	43
78	2017-03-31 02:00:00	3256.00	2017-03-01 01:00:00	47	65
\.


--
-- TOC entry 2833 (class 0 OID 16420)
-- Dependencies: 200
-- Data for Name: tariffs; Type: TABLE DATA; Schema: public; Owner: user
--

COPY tariffs (tariff_id, equation, tariff_symbol) FROM stdin;
43	SUM=(0.3*USAGE+50)*PRICE	A
62	SUM=(USAGE+5)*0.7*PRICE	B
63	SUM=USAGE*2/2.3*PRICE	C
64	SUM=USAGE+50-USAGE/1.65*PRICE	D
65	SUM=0.8*USAGE+(USAGE/4)*PRICE	E
\.


--
-- TOC entry 2843 (class 0 OID 0)
-- Dependencies: 201
-- Name: hibernate_sequence; Type: SEQUENCE SET; Schema: public; Owner: user
--

SELECT pg_catalog.setval('hibernate_sequence', 96, true);


--
-- TOC entry 2692 (class 2606 OID 16399)
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (client_id);


--
-- TOC entry 2694 (class 2606 OID 16404)
-- Name: meters meters_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY meters
    ADD CONSTRAINT meters_pkey PRIMARY KEY (meter_id);


--
-- TOC entry 2696 (class 2606 OID 16409)
-- Name: periods periods_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY periods
    ADD CONSTRAINT periods_pkey PRIMARY KEY (period_id);


--
-- TOC entry 2702 (class 2606 OID 16449)
-- Name: rates rates_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY rates
    ADD CONSTRAINT rates_pkey PRIMARY KEY (rate_id);


--
-- TOC entry 2698 (class 2606 OID 16419)
-- Name: readings readings_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY readings
    ADD CONSTRAINT readings_pkey PRIMARY KEY (reading_id);


--
-- TOC entry 2700 (class 2606 OID 16427)
-- Name: tariffs tariffs_pkey; Type: CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY tariffs
    ADD CONSTRAINT tariffs_pkey PRIMARY KEY (tariff_id);


--
-- TOC entry 2703 (class 2606 OID 16430)
-- Name: meters fk4kr4t7i5rs43yu2xbgrjy35e7; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY meters
    ADD CONSTRAINT fk4kr4t7i5rs43yu2xbgrjy35e7 FOREIGN KEY (client_id) REFERENCES clients(client_id);


--
-- TOC entry 2705 (class 2606 OID 16465)
-- Name: readings fkbyxawa5ov07fpnij0i1vdex3n; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY readings
    ADD CONSTRAINT fkbyxawa5ov07fpnij0i1vdex3n FOREIGN KEY (tariff_id) REFERENCES tariffs(tariff_id);


--
-- TOC entry 2707 (class 2606 OID 16455)
-- Name: rates fko22x7av5kk8xru8fqmwjenxnr; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY rates
    ADD CONSTRAINT fko22x7av5kk8xru8fqmwjenxnr FOREIGN KEY (tariff_id) REFERENCES tariffs(tariff_id);


--
-- TOC entry 2704 (class 2606 OID 16460)
-- Name: readings fksdb48n5bdiwskw91j5hq07llm; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY readings
    ADD CONSTRAINT fksdb48n5bdiwskw91j5hq07llm FOREIGN KEY (meter_id) REFERENCES meters(meter_id);


--
-- TOC entry 2706 (class 2606 OID 16450)
-- Name: rates fktakeybd7tej0x907i9ueduvv5; Type: FK CONSTRAINT; Schema: public; Owner: user
--

ALTER TABLE ONLY rates
    ADD CONSTRAINT fktakeybd7tej0x907i9ueduvv5 FOREIGN KEY (period_id) REFERENCES periods(period_id);


-- Completed on 2017-11-27 21:58:30

--
-- PostgreSQL database dump complete
--

